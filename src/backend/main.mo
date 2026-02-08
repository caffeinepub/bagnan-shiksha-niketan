import Array "mo:core/Array";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type AdmissionSubmission = {
    parentName : Text;
    childName : Text;
    childClass : Text;
    phone : Text;
    email : ?Text;
    address : ?Text;
    message : ?Text;
    timestamp : Int;
  };

  let submissions = Map.empty<Text, AdmissionSubmission>();

  public shared ({ caller }) func createSubmission(parentName : Text, childName : Text, childClass : Text, phone : Text, email : ?Text, address : ?Text, message : ?Text) : async () {
    // No authorization check - admission forms should be accessible to everyone including guests
    let submission : AdmissionSubmission = {
      parentName;
      childName;
      childClass;
      phone;
      email;
      address;
      message;
      timestamp = Time.now();
    };

    submissions.add(phone, submission);
  };

  public query ({ caller }) func listSubmissions() : async [AdmissionSubmission] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view submissions");
    };
    submissions.values().toArray();
  };
};
