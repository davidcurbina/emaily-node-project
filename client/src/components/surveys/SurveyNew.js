//Survey From shows a form for a user to add input

import React, { Component }from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyFormReview';

class SurveyNew extends Component {
  //Create-React Specific
  state = { showFormReview: false};
  
  renderContent() {
    if (this.state.showFormReview){
      return <SurveyReview
        onCancel={
         () => this.setState(
          {
            showFormReview:false
          })
        }/>
    } 

    return <SurveyForm 
      onSurveySubmit={
        ()=> this.setState(
        {
          showFormReview:true
        })
      }/>
  }

  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);