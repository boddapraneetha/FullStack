import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useState } from 'react';

function OfferLetterForm() {
  const [msg, setMsg] = useState('');
  return (
    <div>
      <h2>Generate Offer Letter</h2>
      <Formik initialValues={{ name: '', internshipRole: '' }}
        onSubmit={async (values, { resetForm }) => {
          try {
            const res = await axios.post('http://localhost:5000/api/offer-letter', values);
            setMsg(res.data.message);
            resetForm();
          } catch (err) {
            setMsg(err.response?.data?.message || 'Failed');
          }
        }}>
        <Form>
          <Field name="name" placeholder="Candidate Name" />
          <Field name="internshipRole" placeholder="Role" />
          <button type="submit">Generate</button>
        </Form>
      </Formik>
      <p>{msg}</p>
    </div>
  );
}
export default OfferLetterForm;
