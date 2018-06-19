
// example header for all requests
var header = {
  "userAccessToken": "<userAccessToken>"
}

var administrationDestroy = {

}

var getRelationshipSummary = {
  "message": {
    "header": header
  }
}

var registerUserAccess = {
  "message": {
    "body": {
      "customerDetails": {
        "userId":   "john",
        "password": "john",
        "nationality": "undefined",
        "countryOfBirth": "undefined",
        "dateOfBirth": "undefined",
        "lastName": "<lastName>",
        "middleName": "<middleName>",
        "fullName": "<fullName>"
      }
    }
  }
}

var validateUserAccess = {
  "message": {
    "body": {
      "customerDetails": {
        "userId":   "john",
        "password": "john"
      }
    }
  }
}

var deleteUserAccess = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "userId":   "john",
      }
    }
  }
}

var blockUserAccess = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "userId":   "john",
      }
    }
  }
}

var unblockUserAccess = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "userId":   "john",
      }
    }
  }
}

var resetUserAccess = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "userId":   "john",
      }
    }
  }
}

var generateUserAccessToken = {
  "message": {
    "body": {
      "customerDetails": {
        "userId":   "john",
        "password": "john"
      }
    }
  }
}

var accountDetails = {
  "message": {
    "header": header,
    "body": {
      "accountDetails": {
        "accountNumber": "<accountNumber>"
      }
    }
  }
}

var openAccount = {
  "message": {
    "header": header,
    "body": {
      "productDetails": {
        "productType": "001",
        "subProductType": "undefined",
        "productCurrencyCode": "undefined",
        "accountDetails": {
          "accountName": "My new checking account",
          "physicalArtifactFlag": false,
          "physicalArtifactPin": "undefined",
          "accountCurrentBalance": 0
        }
      }
    }
  }
}

var closeAccount = {
  "message": {
    "header": header,
    "body": {
      "accountDetails": {
        "accountNumber": "<accountNumber"
      }
    }
  }
}

var updateAccount = {
  "message": {
    "header": header,
    "body": {
      "productDetails": {
        "productType": "001",
        "productCode": null,
        "subProductType": "undefined",
        "productCurrencyCode": "undefined",
        "productTransactionRole": null,
        "accountDetails": {
          "accountDefaultFlag": false,
          "accountFilterFlag": false,
          "physicalArtifactFlag": false,
          "termsPaid": 0,
          "currentTerm": 0,
          "currentTermDate": "0",
          "currentTermAmount": 0,
          "daysOfDelay": 0,
          "accountCurrentBalance": 0,
          "accountNewBalance": 0,
          "accountName": "My new checking account",
          "physicalArtifactPin": "undefined",
          "accountNumber": "<accountNumber>"
        }
      }
    }
  }
}

var getTransactionActivity = {
  "message": {
    "header": header,
    "body": {
      "accountDetails": {
        "accountNumber": "<accountNumber>"
      }
    }
  }
}

var getPersonalInfo = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "entityUserId":     "john"
      }
    }
  }
}

var updatePersonalInfo = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "customerType": "001",
        "fullName": "John B Smith",
        "middleName": "B",
        "lastName": "Smith",
        "dateOfBirth": "1980-11-04",
        "countryOfBirth": 'United States',
        "nationality": null,
        "employeeFlag": false,
        "delegateFlag": false,
        "entityUserIdType": "001",
        "entityUserId": "john",
        "contactDetails": [
          {
            "phoneDetails": [
              {
                "phoneType": "003",
                "phoneCountryCode": "1",
                "phoneAreaCode": "305",
                "phoneNumber": "3053005"
              }
            ],
            "emailDetails": [
              {
                "emailType": "001",
                "emailAddress": "personal@fakemail.com"
              },
              {
                "emailType": "002",
                "emailAddress": "work@fakemail.com"
              },
            ],
            "locationDetails": [
              {
                "locationType": "000",
                "locationStreet": "NW 7th Ave",
                "locationStreetNumber": "1951",
                "locationFloor": "6",
                "locationCity": "Miami",
                "locationCounty": "Miami-Dade",
                "locationProvince": null,
                "locationDistrict": null,
                "locationState": "FL",
                "locationZip": "33136",
                "locationCountry": "US"
              }
            ]
          }
        ]
      }
    }
  }
}

var generateAuthenticationToken = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "entityUserId":     "john",
      }
    }
  }
}

var validateAuthenticationToken = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "entityUserId":     "john",
        "userAccessToken":  "<authToken>"
      }
    }
  }
}

var blockProductAccess = {
  "message": {
    "header": header,
    "body": {
      "accountDetails": {
        "accountNumber": "<accountNumber>"
      }
    }
  }
}

var unblockProductAccess = {
  "message": {
    "header": header,
    "body": {
      "accountDetails": {
        "accountNumber": "<accountNumber>"
      }
    }
  }
}

var makeTransfer = {
  "message": {
    "header": header,
    "body": {
      "accountDetails": [
        {
          "accountNumber": "<sourceAccountNumber>",
        },
        {
          "accountNumber": "<destinationAccountNumber>",
          "transactionDetails": {
            "amountDetails": {
              "amountValue": "10.00"
            }
          }
        }
      ]
    }
  }
}

var cancelTransfer = {
  "message": {
    "header": header,
    "body": {
      "transactionDetails": {
        "transactionReferenceNumber": "<transactionReferenceNumber>"
      }
    }
  }
}

var validatePin = {
  "message": {
    "header": header,
    "body": {
      "accountDetails": {
        "accountNumber": "<accountNumber>",
        "physicalArtifactPin": "<pin>"
      }
    }
  }
}

var changePin = {
  "message": {
    "header": header,
    "body": {
      "accountDetails": {
        "accountNumber": "<accountNumber>",
        "physicalArtifactPin": "<pin>",
        "newPhysicalArtifactPin": "<pin>"
      }
    }
  }
}

var makePayment = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "entityUserId": "john",
        "productDetails": {
          "accountDetails": {
            "accountNumber": "<accountNumber>",
            "physicalArtifactPin": "<pin>",
            "accountExpirationDate": "",
            "transactionDetails": {
              "transactionDocumentNumber": "<transactionDocumentNumber>",
              "amountDetails": {
                "amountValue": "<amount>"
              },
            }
          }
        }
      }
    }
  }
}

var cancelPayment = {
  "message": {
    "header": header,
    "body": {
      "transactionDetails": {
        "transactionReferenceNumber": "<transactionReferenceNumber>"
      }
    }
  }
}

var makeDeposit = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "entityUserId": "john",
        "productDetails": {
          "accountDetails": {
            "accountNumber": "<accountNumber>",
            "transactionDetails": {
              "transactionDocumentNumber": "<transactionDocumentNumber>",
              "transactionDescription": "<transactionDescription>",
              "amountDetails": {
                "currency": "USD",
                "amountValue": "<amount>"
              }
            }
          }
        }
      }
    }
  }
}

var cancelDeposit = {
  "message": {
    "header": header,
    "body": {
      "transactionDetails": {
        "transactionReferenceNumber": "<transactionReferenceNumber>"
      }
    }
  }
}
var makeWithdrawal = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "entityUserId": "john",
        "productDetails": {
          "accountDetails": {
            "accountNumber": "<accountNumber>",
            "transactionDetails": {
              "transactionDocumentNumber": "<transactionDocumentNumber>",
              "transactionDescription": "<transactionDescription>",
              "amountDetails": {
                "currency": "USD",
                "amountValue": "<amount>"
              }
            }
          }
        }
      }
    }
  }
}

var cancelWithdrawal = {
  "message": {
    "header": header,
    "body": {
      "transactionDetails": {
        "transactionReferenceNumber": "<transactionReferenceNumber>"
      }
    }
  }
}


var SAMPLE_REQUESTS = {
  '/administration/destroy': administrationDestroy,
  '/administration/register': registerUserAccess,

  '/access/register': registerUserAccess,
  '/access/validate': validateUserAccess,
  '/access/delete': deleteUserAccess,
  '/access/block': blockUserAccess,
  '/access/unblock': unblockUserAccess,
  '/access/token/generate': generateUserAccessToken,

  '/accounts/summary': getRelationshipSummary,
  '/accounts/details': accountDetails,
  '/accounts/open': openAccount,
  '/accounts/close': closeAccount,
  '/accounts/update': updateAccount,
  '/accounts/activity': getTransactionActivity,

  '/personal-information/get': getPersonalInfo,
  '/personal-information/update': updatePersonalInfo,

  '/token/generate': generateAuthenticationToken,
  '/token/validate': validateAuthenticationToken,

  '/products/block': blockProductAccess,
  '/products/unblock': unblockProductAccess,

  '/transfers/make': makeTransfer,
  '/transfers/cancel': cancelTransfer,

  '/pin/validate': validatePin,
  '/pin/change': changePin,

  '/payments/make': makePayment,
  '/payments/cancel': cancelPayment,

  '/deposits/make': makeDeposit,
  '/deposits/cancel': cancelDeposit,

  '/withdrawals/make': makeWithdrawal,
  '/withdrawals/cancel': cancelWithdrawal,
}
