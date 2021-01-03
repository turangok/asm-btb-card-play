import { Input } from '../../components';
import { Button } from 'components';
import {
  StyledHeader,
  StyledForm,
  StyledError,
  StyledWrapper,
} from './Start.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { loginUser } from 'store/actions/userActions';

const Start = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data.userName));
    history.push('/play');
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} data-testid="startId">
      <StyledHeader>Enter username to start </StyledHeader>
      <StyledWrapper>
        <Input
          type="text"
          placeholder="Username"
          name="userName"
          register={register}
          required
          maxLength="20"
        />

        <Button type="submit">Start Game </Button>
        {errors.userName && errors.userName.type === 'required' && (
          <StyledError>Username is required.</StyledError>
        )}

        {errors.userName && errors.userName.type === 'maxLength' && (
          <StyledError>
            This is field required max length of 20 characters.
          </StyledError>
        )}
      </StyledWrapper>
    </StyledForm>
  );
};

export default Start;
