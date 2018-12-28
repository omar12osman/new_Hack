import React from "react";
const Firebasecontext = React.createContext(null);

export const withFirebase = Component => props => (
  <Firebasecontext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </Firebasecontext.Consumer>
);
export default Firebasecontext;
