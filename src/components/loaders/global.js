import React from 'react';
import { connect } from 'react-redux';
import * as LoadingSelectors from './../../store/loading/selectors'
import './global.scss';

const LoaderGlobal = ({...props}) => (
 <div className="LoaderGlobal">
   {
     props.isLoading && (
       <div>
         <span>Loading</span>
         <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
         </div>
       </div>
     )
   }
 </div>
);

const mapStateToProps = (state) => {
 return {
   isLoading: LoadingSelectors.isLoading(state)
 };
}

const mapDispatchToProps = dispatch => {
 return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoaderGlobal);
