import { DarkTheme, DarkThemeFill, Segment, SegmentedControl } from '@design-system-rt/rtk-ui-kit';
import { useTheme } from 'src/app/lib/ThemeProvider/useTheme';

export const Toggler = () => {
  const { theme, themeToggler } = useTheme();
  return (
    <div>
      <SegmentedControl size="small" value={theme} onChange={themeToggler}>
        <Segment icon={<DarkTheme />} index="light" />
        <Segment icon={<DarkThemeFill />} index="dark" />
      </SegmentedControl>
    </div>
  );
};
