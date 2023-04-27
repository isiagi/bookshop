/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

function WithAuth(OriginalComponent:any) {
  
    function NewComponent(_props:any) {
        
        //render OriginalComponent and pass on its props.
        if(localStorage.getItem('itemName') === null) {
            alert("Please login to continue")
            return window.history.back()
        }
          return <OriginalComponent />;
        }
        return NewComponent;
}

export default WithAuth