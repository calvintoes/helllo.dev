import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

// Shape of form values
interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  experience: string;
}

interface OtherProps {
  message: string;
}

// The type of props MyForm receives
interface FormWrapperProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form>
      <h1>{message}</h1>
      <Field name="firstName" />
      {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}

      <Field name="lastName" />
      {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}

      <Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <Field type="select" name="status">
        <option value="Student">Student</option>
        <option value="Professional">Professional</option>
      </Field>

      <Field as="textarea" name="experience" />
      {touched.experience && errors.experience && <div>{errors.experience}</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

const VolunteerForm = withFormik<FormWrapperProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      firstName: '',
      lastName: '',
      experience: '',
    };
  },

  // Add a custom validation function (this can be async too!)
  validationSchema: () =>
    Yup.object().shape({
      email: Yup.string().email('Invalid email address').required(),
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      experience: Yup.string(),
      status: Yup.string().required('Select One'),
    }),

  handleSubmit: values => {
    // do submitting things
    console.log(values);
  },
})(InnerForm);

export default VolunteerForm;
