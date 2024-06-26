/**
 * The above type defines the structure of user data, including their unique ID, name, email, photo
 * URL, phone number, college, state, city, and optional fields for EVG ID, referral ID, and whether
 * they are a new user.
 * @property {string} uid - The unique identifier for the user. It is typically generated by the
 * authentication system and is used to identify the user in the database.
 * @property {string} name - The name of the user.
 * @property {string} email - The email property is a string that represents the email address of the
 * user. It is used to uniquely identify the user and to send them notifications and updates related to
 * their account.
 * @property {string} photoURL - `photoURL` is a property in the `UserData` type that represents the
 * URL of the user's profile photo. It is of type `string`.
 * @property {number} phoneNumber - The `phoneNumber` property is a number that represents the user's
 * phone number. It is a part of the `UserData` type, which is used to define the structure of user
 * data objects.
 * @property {string} college - The college property is a string that represents the name of the
 * college or university that the user is associated with.
 * @property {string} state - The "state" property in the "UserData" type refers to the state in which
 * the user resides. It is likely a string value representing the name or abbreviation of the state
 * (e.g. "California" or "CA").
 * @property {string} city - The "city" property in the "UserData" type represents the city where the
 * user is located.
 * @property {string} evgId - It is a property that may contain the unique identifier of the user in
 * the EVG (EventGo) system. EVG is a platform that provides event management services. If the user has
 * registered for an event using EVG, their unique identifier may be stored in this property.
 * @property {string} referralId - The `referralId` property is an optional string property in the
 * `UserData` type. It can be used to store the unique identifier of the user who referred the current
 * user to the platform or application. This can be useful for tracking user acquisition and rewarding
 * users for referring others. If the user
 * @property {boolean} isNewUser - isNewUser is an optional boolean property in the UserData type. It
 * is used to indicate whether the user is a new user or not. If the property is present and set to
 * true, it means that the user is a new user. If it is not present or set to false, it means that
 */
export type UserData = {
  uid: string;
  name: string;
  email: string;
  photoURL: string;
  phoneNumber: number;
  college: string;
  state: string;
  city: string;
  evgId?: string;
  referralId?: string;
  isNewUser?: boolean;
};

/**
 * The above type defines the structure of an object representing a city with its id, name, latitude,
 * and longitude.
 * @property {number} id - The unique identifier for a city.
 * @property {string} name - The name of a city in the `Cities` type.
 * @property {string} latitude - Latitude is a geographic coordinate that specifies the north-south
 * position of a point on the Earth's surface. It is measured in degrees, minutes, and seconds, with
 * values ranging from 0° at the equator to 90° at the poles. In this context, latitude refers to the
 * latitude
 * @property {string} longitude - Longitude is a geographic coordinate that specifies the east-west
 * position of a point on the Earth's surface. It is measured in degrees, with values ranging from -180
 * to 180.
 */
export type Cities = {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
};

/**
 * The above type defines a single property interface for a component's title.
 * @property {string} title - The `TitleProps` type is a TypeScript interface that defines a single
 * property `title` of type `string`. This interface can be used to define the expected shape of an
 * object that has a `title` property with a string value.
 */
export type TitleProps = {
  title: string;
};

/**
 * The above type defines the props for an event card component in TypeScript.
 * @property {string} id - A unique identifier for the event card.
 * @property {string} title - The title of the event.
 * @property {string} description - The `description` property is a string that contains a brief
 * description of an event. It provides additional information about the event beyond the title and
 * category.
 * @property {string} date - The date property is a string that represents the date of the event.
 * @property {string} time - The "time" property is a string that represents the time of the event. It
 * could be in any format, such as "12:00 PM" or "6:30 AM".
 * @property {string} category - The category property is a string that represents the category of the
 * event. It could be something like "music", "sports", "food", "art", etc.
 * @property {string} image - The "image" property is a string that represents the URL or file path of
 * an image associated with an event. It could be used to display a visual representation of the event
 * on a website or in an application.
 */
type EventProps = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  category: string;
  image: string;
  link: string;
};
