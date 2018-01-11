// @flow
import React, {Component} from 'react'
import * as Constants from '../../../../../constants/indexConstants'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import THEME from '../../../../../theme/variables/airbitz.js'

export default class DeleteIcon extends Component<{}> {
  render () {
    return <FAIcon name={Constants.TRASH_O} size={24} color={THEME.COLORS.PRIMARY} style={[{
      backgroundColor: THEME.COLORS.TRANSPARENT,
      zIndex: 1015,
      elevation: 1015
    }]} />
  }
}
