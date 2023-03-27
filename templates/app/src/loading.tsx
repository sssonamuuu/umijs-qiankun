import { LwPlaceholder } from '@lw/components';
import { ErrorUtils } from '@lw/utils';

export default function () {
  return (
    <LwPlaceholder error={ErrorUtils.loading} />
  );
}
