// useeffect is not only used for calling api, we can also use 'useeffect' for dom manipulation
//in fact hooks manipulate dom internally, thats why we dont need to manipulate dom directly in REACT. But here we are creating a custom hook. SO, dom manipulation will be required

import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Space Hive`;
  }, [title]);
};

export default useTitle;
