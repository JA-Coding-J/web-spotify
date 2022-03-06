import React from 'react';
import ContainerCenter from '../ContainerCenter';
import Loader from '../Loader';

// export default function LoaderCenter(): JSX.Element {
//   return (
//     <div className="absolute w-full h-full left-0 top-0 m-auto opacity-50 bg-gray-300">
//       <div className="relative w-full h-full">
//         <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full m-auto">
//           <Loader />
//         </div>
//       </div>
//     </div>
//   );
// }
const CenterLoader: React.FC = () => {
  return (
    <ContainerCenter>
      <Loader />
    </ContainerCenter>
  );
};

export default CenterLoader;
