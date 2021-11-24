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
  START_PAYMENT: gql`
    mutation($BookingId: Long){
        BookingMutation{
          StartBookingPayment(BookingId: $BookingId){
            Amount
            RazorpayOrderId
          }
        }
      }`,

  COMPLETE_PAYMENT: gql`
    mutation($RazorpayOrderId: String!,$RazorpayPaymentId:String!,$RazorpaySignature:String!){
            BookingMutation{
                CompleteBookingPayment(
                    RazorpayOrderId:$RazorpayOrderId,
                    RazorpayPaymentId:$RazorpayPaymentId,
                    RazorpaySignature:$RazorpaySignature
                    )
            }
        }`,

  CREATE_MEMBERSHIP: gql`
        mutation ($MembershipPlanId : Long!){
          CustomerUserMembershipMutation {
            CreateMembership(MembershipPlanId: $MembershipPlanId) {
              CustomerUser {
                FirstName
                LastName
              }
              MembershipType
              MembershipDuration
              Amount
              GstPercentage
              Id
            }
          }
        }`,

  START_MEMBERSHIP_PAYMENT: gql`
        mutation ($CustomerUserMembershipId : Long!){
          CustomerUserMembershipMutation {
            StartMembershipPayment(CustomerUserMembershipId: $CustomerUserMembershipId) {
              Amount
            }
          }
        }`,

  COMPLETE_MEMBERSHIP_PAYMENT: gql`
       mutation($RazorpayOrderId: String!,$RazorpayPaymentId:String!,$RazorpaySignature:String!){
          CustomerUserMembershipMutation {
            CompleteMembershipPayment(
              RazorpayOrderId:$RazorpayOrderId,
              RazorpayPaymentId:$RazorpayPaymentId,
              RazorpaySignature:$RazorpaySignature
            )
          }
        }`,
        
};
