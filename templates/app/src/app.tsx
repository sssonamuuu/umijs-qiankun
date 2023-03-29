import '../tailwind.css';

import { RootContainer } from '@lw/components';
import { defineApp } from '@umijs/max';

export default defineApp({
  rootContainer (continer) {
    return <RootContainer>{continer}</RootContainer>;
  },
});
