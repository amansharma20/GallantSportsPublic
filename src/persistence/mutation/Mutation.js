import { gql } from '@apollo/client';

export const GQLMutation = {
  CREATE_BOOKING: gql`
  mutation myMutation($ArenaId: Long!,$ActivityArenaId:Long!, $BookingDateTime: DateTime!, $NeedCoach:Boolean ) {
        BookingMutation {
            CreateBooking(
                ArenaId: $ArenaId,
                ActivityArenaId: $ActivityArenaId,
                BookingDateTime: $BookingDateTime,
                NeedCoach: $NeedCoach
            ) {
                    Amount
                    BookingDateTime
            }
        }
    }`,
    
    CANCEL_BOOKING: gql`
    mutation ($BookingId: Long!){
        BookingMutation {
            CancelBooking(BookingId: $BookingId)
        }
    }
    `
};