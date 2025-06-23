import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useState } from 'react';

function SignupForm() {
  const [msg, setMsg] = useState('');
  return (
    <div>
      <h2>Sign Up</h2>
      <Formik initialValues={{ username: '', email: '', password: '' }}
        onSubmit={async (values, { resetForm }) => {
          try {
            const res = await axios.post('http://localhost:5000/api/signup', values);
            setMsg(res.data.message);
            resetForm();
          } catch (err) {
            setMsg(err.response?.data?.message || 'Signup failed');
          }
        }}>
        <Form>
          <Field name="username" placeholder="Username" />
          <Field name="email" type="email" placeholder="Email" />
          <Field name="password" type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
      <p>{msg}</p>
    </div>
  );
}
export default SignupForm;
