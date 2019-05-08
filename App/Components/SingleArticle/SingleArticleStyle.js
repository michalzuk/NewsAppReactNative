import styled from 'styled-components';
import { Card, Paragraph, Text, Title } from 'react-native-paper';
import { Colors } from '../../Theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const StyledCard = styled(Card)`
  margin-bottom: ${hp(4)};
  border-bottom-width: 1px;
  border-bottom-color: ${() => Colors.lightGrey};
  border-top-width: 0;
  padding: 0 ${wp(2)}px ${hp(2)}px ${wp(2)}px;
`;

export const StyledCardContent = styled(Card.Content)`
  padding: ${wp(1)}px;
  padding-top: ${wp(2)};
`;

export const StyledDescription = styled(Paragraph)`
  padding-top: ${hp(1)}px;
  padding-left: ${wp(0.75)}px;
  font-family: 'OpenSans-Light';
`;

export const DetailsText = styled(Text)`
  color: ${Colors.grey};
  font-family: 'OpenSans-Light';
`;

export const StyledTitle = styled(Title)`
  line-height: ${hp(3.5)};
`;
