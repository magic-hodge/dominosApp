import React, {useState} from "react";

function Toggle(initialValue = false) {
    
    const [value, setValue] = useState(initialValue);

    const toggle = React.useCallback(() => {
        setValue(v => !v);
    }, []);

    return [value, toggle];
}

export default Toggle;