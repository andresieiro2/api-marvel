import React from 'react';
import { connect } from 'react-redux';
import './Comics.scss';

class Comics extends React.Component {
 render() {
   console.log(this.props);
   return (
     <div className="Comics" >
      Comics
     </div>
   );
 }
};

const mapStateToProps = (state) => {
 return { };
}

const mapDispatchToProps = dispatch => {
 return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comics);
