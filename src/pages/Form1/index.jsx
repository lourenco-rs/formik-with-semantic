import React from 'react';
import * as yup from 'yup';

import { Formik, Field } from 'formik';
import { Container, Form, Button } from 'semantic-ui-react';

import { Input as CustomInput } from 'components/form';
import { Debug } from 'components/form/Debug';

import Layout from 'components/Layouts';

const isRequired = message => value => (value ? undefined : message);

class Form1 extends React.Component {
  componentDidMount() {
    //
  }

  render() {
    console.log('>> render');

    return (
      <Layout>
        <Container text>
          <h1>Notas</h1>

          <Formik
            onSubmit={(values, actions) => {
              console.log('submit', JSON.stringify(values, null, 2));

              // setTimeout(() => {
              //   // alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              // }, 3000);
            }}
            initialValues={{
              numero: '',
              serie: '',
              cargo: 'Motorista',
              outro: 'um valor...',
              descricao: 'Descrição...',
            }}
            validate={values => {
              console.log('validate', values);
            }}
            validationSchema={yup.object().shape({
              numero: yup.string().required('Campo obrigatório'),
              serie: yup.string().required('Campo obrigatório'),
              // descricao: yup.string().required('Campo obrigatório'),
              // cargo: yup.string().required('Campo obrigatório'),
            })}
            validateOnChange={false}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Field
                  name="outro"
                  component={CustomInput}
                  componentProps={{
                    label: 'Outro',
                  }}
                />

                <Form.Group>
                  <Field
                    name="numero"
                    component={CustomInput}
                    componentProps={{
                      label: 'Número',
                      // width: 3,
                    }}
                  />

                  <Field
                    name="serie"
                    component={CustomInput}
                    componentProps={{
                      label: 'Série',
                      // width: 3,
                    }}
                  />
                </Form.Group>

                {/* <Field
                name="descricao"
                component={CustomInput}
                componentProps={{
                  label: 'Descrição',
                }}
              />

              <Field
                name="cargo"
                component={CustomInput}
                componentProps={{
                  label: 'Cargo',
                }}
              /> */}

                {/* <input value={'errors: ' + Object.keys(errors).length + ' ' + Object.keys(errors) + ' dirty: ' + dirty + ' isValid: ' + isValid} /> */}

                {/* <Button primary type="submit" disabled={isSubmitting || (Object.keys(errors).length > 0) || !dirty}> */}
                {/* <Button primary type="submit" disabled={isSubmitting || !isValid || !dirty}> */}
                <Button primary type="submit" disabled={isSubmitting}>
                  Salvar
                </Button>

                <Debug />
              </Form>
            )}
          </Formik>
        </Container>
      </Layout>
    );
  }
}

export default Form1;
