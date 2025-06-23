import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useState } from 'react';

function InternshipForm() {
  const [msg, setMsg] = useState('');
  return (
    <div>
      <h2>Internship Application</h2>
      <Formik initialValues={{ name: '', email: '', college: '' }}
        onSubmit={async (values, { resetForm }) => {
          try {
            const res = await axios.post('http://localhost:5000/api/internship-apply', values);
            setMsg(res.data.message);
            resetForm();
          } catch (err) {
            setMsg(err.response?.data?.message || 'Failed');
          }
        }}>
        <Form>
          <Field name="name" placeholder="Name" />
          <Field name="email" type="email" placeholder="Email" />
          <Field name="college" placeholder="College" />
          <button type="submit">Apply</button>
        </Form>
      </Formik>
      <p>{msg}</p>
    </div>
  );
}
export default InternshipForm;
