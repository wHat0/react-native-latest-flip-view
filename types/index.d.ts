import { Component } from "react";
import { ViewStyle, EasingFunction } from "react-native";

interface FlipViewProps {
  style?: ViewStyle | ViewStyle[];
  flipDuration?: number;
  flipEasing?: EasingFunction;
  flipAxis?: "x" | "y";
  front?: React.ReactNode;
  back?: React.ReactNode;
  perspective?: number;
  onFlip?: () => void;
  onFlipped?: () => void;
  isFlipped?: boolean;
}

export default class FlipView extends Component<FlipViewProps> {
  static defaultProps: FlipViewProps;
}
