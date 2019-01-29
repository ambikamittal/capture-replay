import React from 'React'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const WizardFormFirstPage = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
            <Field
        name="bankAcc1"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc2"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc3"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc4"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc5"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc6"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc7"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc8"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc9"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc10"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc11"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc12"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc13"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc14"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc15"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc16"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc17"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc18"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc19"
        type="text"
        component={renderField}
        label="Bank Account"
      />
                  <Field
        name="bankAcc20"
        type="text"
        component={renderField}
        label="Bank Account"
      />

      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
    )
}

export default reduxForm({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(WizardFormFirstPage)