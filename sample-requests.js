
// example header for all requests
var header = {
  "fintechId":   "undefined",
  "userAgent":   "undefined",
  "sessionDate": "undefined",
  "sessionTime": "undefined",
  "sessionId":   "undefined",
  "retryFlag":   "0",
  "locale":      "us",
  "language":    "en",
  "entityCode":  "bankbot",
  "userId":      "john",
  "password":    "john",
  "userIpAddress":            "undefined",
  "transactionNumber":        "1",
  "transactionApprovalLevel": "undefined",
  "transactionFee":           "0",
  "transactionFeeFlag":       "0",
  "transactionLegend":        "undefined"
}

var getRelationshipSummary = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "entityUserId":     "john"
      }
    }
  }
}

var validateUserAccess = {
  "message": {
    "header": header,
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
      "customerDetails": {
        "productDetails": {
          "accountDetails": {
            "accountNumber": "accountNumber"
          }
        }
      }
    }
  }
}

var getTransactionActivity = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "productDetails": {
          "accountDetails": {
            "accountNumber": "accountNumber"
          }
        }
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
      "customerDetails": {
        "productDetails": {
          "accountNumber": "<accountNumber>"
        }
      }
    }
  }
}

var unblockProductAccess = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "productDetails": {
          "accountNumber": "<accountNumber>"
        }
      }
    }
  }
}

var makeTransfer = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "productDetails": [
          {
            "accountNumber": "<sourceAccountNumber>",
          },
          {
            "accountNumber": "<destinationAccountNumber>",
            "amountDetails": {
              "amountValue": "10.00"
            }
          }
        ]
      }
    }
  }
}

var validatePin = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "productDetails": {
          "accountNumber": "<accountNumber>",
          "physicalArtifactPin": "<pin>"
        }
      }
    }
  }
}

var changePin = {
  "message": {
    "header": header,
    "body": {
      "customerDetails": {
        "productDetails": {
          "accountNumber": "<accountNumber>",
          "physicalArtifactPin": "<pin>",
          "newPhysicalArtifactPin": "<pin>"
        }
      }
    }
  }
}

var SAMPLE_REQUESTS = {
  '/relationship-summary/get': getRelationshipSummary,
  '/manage-user-access/validate': validateUserAccess,
  '/manage-account/details': accountDetails,
  '/get-transaction-activity/account-activity': getTransactionActivity,
  '/manage-personal-info/get': getPersonalInfo,
  '/manage-authentication-token/generate': generateAuthenticationToken,
  '/manage-authentication-token/validate': validateAuthenticationToken,
  '/manage-product-access/block': blockProductAccess,
  '/manage-product-access/unblock': unblockProductAccess,
  '/manage-transfers/make-transfer': makeTransfer,
  '/manage-pin/validate': validatePin,
  '/manage-pin/change': changePin
}
