import styled from 'styled-components';
import { Card, Paragraph, Text, Title } from 'react-native-paper';
import { Colors } from '../../Theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const StyledCardContent = styled(Card.Content)`
  padding: ${wp(1)}px;
`;

export const StyledCard = styled(Card)`
  margin-bottom: ${hp(4)};
  border-bottom-width: 1px;
  border-bottom-color: ${() => Colors.lightGrey};
  border-top-width: 0;
  padding: 0 ${wp(2)}px ${hp(2)}px ${wp(2)}px;
`;

export const DetailsText = styled(Text)`
  color: ${Colors.grey};
`;

export const StyledTitle = styled(Title)`
  line-height: ${hp(3)};
`;

export const StyledDescription = styled(Paragraph)`
  padding-top: ${hp(1)}px;
  padding-left: ${wp(0.75)}px;
`;
