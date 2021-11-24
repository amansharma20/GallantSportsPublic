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
            ) {     Id
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
    `,
    START_PAYMENT:gql`
    mutation($BookingId: Long){
        BookingMutation{
          StartBookingPayment(BookingId: $BookingId){
            Amount
            RazorpayOrderId
          }
        }
      }
    `,
    COMPLETE_PAYMENT: gql`
    mutation($RazorpayOrderId: String!,$RazorpayPaymentId:String!,$RazorpaySignature:String!){
            BookingMutation{
                CompleteBookingPayment(
                    RazorpayOrderId:$RazorpayOrderId,
                    RazorpayPaymentId:$RazorpayPaymentId,
                    RazorpaySignature:$RazorpaySignature
                    )
            }
        }
    `
};
