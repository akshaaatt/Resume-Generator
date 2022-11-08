import React from 'react';
import {Alert, Column, Container, Row} from "ashton-design-system";

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<any, State> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // log to your reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Row horizontalAlign="center">
            <Column>
              <Alert color="red">Something went wrong.</Alert>
            </Column>
          </Row>
        </Container>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
