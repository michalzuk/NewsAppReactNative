import styled from 'styled-components';
import { Title } from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../../Theme';

export const StyledTitle = styled(Title)`
  padding-left: ${wp(6)};
  padding-top: ${hp(2)}
  padding-bottom: ${hp(1)}px;
  margin-top: 0;
  font-size: ${wp(8)};
  background-color: ${Colors.black};
  text-transform: uppercase;
  color: ${Colors.white};
  font-family: 'AdventPro-Bold';
`;
