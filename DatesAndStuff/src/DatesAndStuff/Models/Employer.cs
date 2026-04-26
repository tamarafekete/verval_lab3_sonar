using System;
using System.Collections.Generic;
using System.Linq;

namespace DatesAndStuff.Models;

public class Employer {

    string taxId;

    string address;

    string ownerName;

    List<int> activityDomains;

    public Employer(
        string taxId,
        string address,
        string ownerName,
        List<int> activityDomains)
    {
        this.taxId = taxId;
        this.address = address;
        this.ownerName = ownerName;
        this.activityDomains = activityDomains;
    }

    internal Employer Clone()
    {
        return new Employer(taxId, address, ownerName, new List<int>(activityDomains));
    }
}