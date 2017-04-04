﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularWebAPI.Controllers
{
    public class CalculationsController : ApiController
    {
        [Route("Sum")]
        [HttpGet]
        public IHttpActionResult DoSum(int a, int b)
        {
            return Ok(a + b);
        }
    }
}
