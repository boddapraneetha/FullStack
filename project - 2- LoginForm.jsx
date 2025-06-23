import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useState } from 'react';

function LoginForm() {
  const [msg, setMsg] = useState('');
  return (
    <div>
      <h2>Login</h2>
      <Formik initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { resetForm }) => {
          try {
            const res = await axios.post('http://localhost:5000/api/login', values);
            setMsg(res.data.message);
            localStorage.setItem('token', res.data.token);
            resetForm();
          } catch (err) {
            setMsg(err.response?.data?.message || 'Login failed');
          }
        }}>
        <Form>
          <Field name="email" type="email" placeholder="Email" />
          <Field name="password" type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <p>{msg}</p>
    </div>
  );
}
export default LoginForm;
