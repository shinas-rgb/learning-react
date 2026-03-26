// import { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function SignupForm() {
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    alert(`Email: ${data.email} password: ${data.password}`)
  }
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input
            type="email"
            placeholder='Your email'
            {...register('email', { required: 'Email is required' })} />
        </label>
        {errors.email && (
          <p style={{ color: "crimson" }}>{errors.email.message}</p>
        )}
        <br />

        <label>
          Password
          <input
            type="password"
            placeholder='Your password'
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 4,
                message: 'Password length must be minimum 4'
              },
              maxLength: {
                value: 12,
                message: 'Password length must be maximum 12'
              }
            })} />
        </label>
        {errors.password && (
          <p style={{ color: "crimson" }}>{errors.password.message}</p>
        )}
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
