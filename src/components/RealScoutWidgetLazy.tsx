import LazyOnVisible from './LazyOnVisible';
import RealScoutWidget, { type RealScoutWidgetProps } from './RealScoutWidget';

export default function RealScoutWidgetLazy(props: RealScoutWidgetProps) {
  const { className = '', ...widgetProps } = props;

  return (
    <LazyOnVisible minHeight="600px" className={className}>
      <RealScoutWidget {...widgetProps} className="" />
    </LazyOnVisible>
  );
}
