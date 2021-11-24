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
  query($ActivityId: Long!){
    ActivityArenaQuery{
      GetArenaByActivityId(ActivityId:$ActivityId){
        Arena{
        Address
        ArenaImageStoragePath
        CCTV
        ChangingRooms
        City
        Country
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
        Washrooms
              }
        Activity{
          ActivityIconStoragePath
          Id
          Name
        }
      }
    }
  }`,

  GET_ACTIVITY_BY_ARENA_ID: gql`
  query($ArenaId: Long!){
    ActivityArenaQuery{
      GetActivityByArenaId(ArenaId: $ArenaId){
        Activity{
          Id
          Name
          ActivityIconStoragePath
        }
      }
    }
  }`,

  GET_CUSTOMER_ALL_BOOKINGS: gql`
  query {
    BookingQuery {
      GetCustomerAllBookings {
        ActivityArena {
          Arena {
            Id
            ArenaImageStoragePath
            Name
            Description
            Address
            Rating
            WhatToBring
          }
          Activity {
            Id
            Name
            ActivityIconStoragePath
          }
        }
        Amount
        BookingDateTime
        CreatedDateTimeUtc
        Duration
        GST
        Id
        Status
        NeedCoach
        ReferenceNumber
        UpdatedDateTimeUtc
        CustomerUser {
          FirstName
          LastName
        }
      }
    }
  }`,

  GET_CUSTOMER_UPCOMING_BOOKINGS: gql`
  query myquery {
    BookingQuery {
      GetCustomerUpcomingBookings {
        ActivityArena {
          Arena {
            Id
            ArenaImageStoragePath
            Name
            Description
            Address
            Rating
            WhatToBring
          }
          Activity {
            Id
            Name
            ActivityIconStoragePath
          }
        }
        Amount
        BookingDateTime
        CreatedDateTimeUtc
        Duration
        GST
        Id
        Status
        NeedCoach
        ReferenceNumber
        UpdatedDateTimeUtc
        CustomerUser {
          FirstName
          LastName
        }
      }
    }
  }`,

  GET_CUSTOMER_CANCEL_BOOKINGS: gql`
  query myquery {
    BookingQuery {
      GetCustomerCancelledBookings {
        ActivityArena {
          Arena {
            Id
            ArenaImageStoragePath
            Name
            Description
            Address
            Rating
            WhatToBring
          }
          Activity {
            Id
            Name
            ActivityIconStoragePath
          }
        }
        Amount
        BookingDateTime
        CreatedDateTimeUtc
        Duration
        GST
        Id
        Status
        NeedCoach
        ReferenceNumber
        UpdatedDateTimeUtc
        CustomerUser {
          FirstName
          LastName
        }
      }
    }
  }`,

  GET_BOOKING_CHARGES_BY_ACTIVITYID_OR_ARENAID: gql`
  query myquery ($ArenaId: Long!,$ActivityId: Long!){
    ActivityArenaChargesQuery {
      GetActivityArenaCharges(ArenaId: $ArenaId, ActivityId: $ActivityId) {
        Id
        AmountPerHr
        GST
        Arena {
          Name
        }
        Activity {
          Name
        }
      }
    }
  }`,

  GET_NEAREST_ARENA: gql`
  query($Latitude : String!,$Longitude : String!) {
    NearestArenaQuery {
      FindNearByArena(Latitude: $Latitude, Longitude: $Longitude) {
            Id
            ArenaImageStoragePath
            Name
            Description
            Address
            Rating
            WhatToBring
      }
    }
  }`

};