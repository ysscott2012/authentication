import { Address } from './address';

export class User {
    id: String = '';
    firstName: String = '';
    lastName: String = '';
    email: String = '';
    password: String = '';
    level: Number = 0;
    verified: Boolean = false;
    isApproved: Boolean = false;
    isRejected: Boolean = false;
    since: String = new Date().toJSON();
    address: Address = new Address();

    /**
     *  constructor
     */
    constructor (user?: any, includeEverything?: boolean) {
      if (user) {
        this.id = user._id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.level = user.level;
        this.isApproved = user.isApproved;
        this.isRejected = user.isRejected;
        this.since = user.since;
        this.address = new Address(user.address);
      }
    }

    /**
     * Get Full Name
     */
    getFullName(): String {
      return this.firstName + ' ' + this.lastName;
    }

    /**
     * Get String
     */
    getSinceDateString(): String {
      return new Date(this.since.toString()).toLocaleDateString();
    }

    /**
     * Get Level Name
     */
    getLevelName(): String {
      switch (this.level) {
        case 0:
          return 'bronze';
        case 1:
          return 'silver';
        case 2:
          return 'gold';
        case 3:
          return 'platinum';
        case 4:
          return 'diamond';
        case 5:
          return 'master';
        case 6:
          return 'grand master';
        case 99:
          return 'administrator';
      }
    }
}

