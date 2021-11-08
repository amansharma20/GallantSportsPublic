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
}`,

GET_EXPLORE: gql`
query MyQuery {
  ArenaQuery {
    GetArena {
      Address
      ArenaImageStoragePath
      CCTV
      ChangingRooms
      City
      Country
      CreatedDateTimeUtc
      Description
      DrinkingWater
      Id
      Latitude
      Lockers
      Longitude
      Name
      Parking
      PhoneNumber
      PinCode
      Rating
      State
      UpdatedDateTimeUtc
      Washrooms
    }
  }
}`,

GET_CUSTOMER_USER_DETAILS: gql`
query MyQuery {
  CustomerUserQuery {
    GetCustomerUserDetails {
      FirstName
      Id
      LastName
      ProfilePictureStoragePath
    }
  }
}`,

GET_ARENA_BY_ACTIVITY_ID: gql`
query MyQuery ($ActivityId: Long!){
  ActivityArenaQuery {
    GetArenaByActivityId(ActivityId: $ActivityId) {
      Activity {
        Id
        ActivityIconStoragePath
        Name
      }
      ActivityId
      Arena {
        Id
        Name
        Address
        ArenaImageStoragePath
        CCTV
        ChangingRooms
        City
        Country
        CreatedDateTimeUtc
        Description
        DrinkingWater
        Latitude
        Lockers
        Longitude
        Parking
        PhoneNumber
        PinCode
        Rating
        State
        UpdatedDateTimeUtc
        Washrooms
      }
      ArenaId
      Id
    }
  }
}`,

GET_ACTIVITY_BY_ARENA_ID: gql`
query MyQuery ($ArenaId: Long!){
  ActivityArenaQuery {
    GetActivityByArenaId(ArenaId: $ArenaId) {
      Activity {
        Id
        Name
        ActivityIconStoragePath
      }
      ActivityId
      Arena {
        Id
        Name
        Address
        ArenaImageStoragePath
        CCTV
        ChangingRooms
        City
        Country
        CreatedDateTimeUtc
        Description
        DrinkingWater
        Latitude
        Longitude
        Lockers
        Parking
        PhoneNumber
        PinCode
        Rating
        State
        UpdatedDateTimeUtc
        Washrooms
      }
      ArenaId
      Id
    }
  }
}`,

};