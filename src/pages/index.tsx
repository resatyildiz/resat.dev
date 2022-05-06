import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Resat YILDIZ | Software Developer"
          description="I am a passionate Fullstack Software Developer at WORLD. I am interested in distributed systems, JS and JS frameworks, PHP."
        />
      }
    >
      
    </Main>
  );
};

export default Index;
