import styled from 'styled-components';
import { Title } from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../../Theme';

export const StyledTitle = styled(Title)`
  padding-left: ${wp(6)};
  padding-top: ${hp(4)};
  padding-bottom: ${hp(1)}px;
  font-size: ${wp(8)};
  text-transform: uppercase;
  color: ${Colors.grey};
`;
