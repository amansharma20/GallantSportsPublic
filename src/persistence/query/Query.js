import { gql } from '@apollo/client';

export const GQLQuery = {

GET_ACTIVITIES: gql`
query MyQuery {
ActivityQuery {
GetActivity {
Id
Name
ActivityIconStoragePath
CreatedDateTimeUtc
UpdatedDateTimeUtc
}
}
}
`,

GET_EXPLORE: gql`
query MyQuery {
ArenaQuery {
GetArena {
Id
Name
Parking
PhoneNumber
PinCode
Rating
State
Washrooms
Longitude
Lockers
Latitude
DrinkingWater
Description
Country
City
ChangingRooms
CCTV
ArenaImageStoragePath
Address
CreatedDateTimeUtc
UpdatedDateTimeUtc
}
}}`,

};