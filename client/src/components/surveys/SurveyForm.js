// Surevy New shows SurveyForm and SurveyReview
import _ from 'lodash';
import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';


class SurveyForm extends Component{
  
  renderFields(){
    return _.map(formFields, ({ label, name}) => {
      return (
        <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
        );
    });
  }
  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text">Cancel</Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next<i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values){
  const errors={};
  
  errors.recipients = validateEmails(values.recipients || '');
  
  _.each(formFields, ({ name }) => {
    if(!values[name]){
      errors[name] = `Empty ${name} field`;
    }
  });
  
  return errors;
}

export default reduxForm({
  form: 'surveyForm',
  validate,
  destroyOnUnmount: false
})(SurveyForm);