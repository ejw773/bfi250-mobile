import React from 'react';
import { Badge } from 'react-native-elements'

const BadgeComponent = ({status}) => {
    console.log(status)
  let badgeStatus = 'warning'
  let badgeMessage = 'To See'
  if (status === false) {
    badgeStatus = 'error';
    badgeMessage = 'Skipped'
  }
  if (status === true) {
    badgeStatus = 'success';
    badgeMessage = 'Seen'
  }

  return (
    <Badge
      status={badgeStatus}
      value={badgeMessage}
      containerStyle={{ position: 'absolute', top: 10, left: 10 }}
    />
  )
}

export default BadgeComponent;
