import { Progress } from '@material-tailwind/react';

type ProgressBarProps = {
  loading: boolean;
};

const ProgressBar = ({ loading }: ProgressBarProps) => {
  return (
    <Progress
      value={loading ? 50 : 100}
      variant="filled"
      placeholder={loading ? '50%' : '100%'}
      color="light-blue"
    />
  );
};

export default ProgressBar;
