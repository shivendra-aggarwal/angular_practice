using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularWebAPI.Controllers
{
    
    public class EmployeesController : ApiController
    {
        [Route("api/employees/{empno}")]
        [Route("api/employees")]
        public IHttpActionResult Get(string empno = null)
        {
            List<Employee> employees = new List<Employee>();
            employees.Add(new Employee() { empno = "1001", name = "David", sal = 2000, depno = 1 });
            employees.Add(new Employee() { empno = "1002", name = "Backhum", sal = 2400, depno = 2 });
            employees.Add(new Employee() { empno = "1003", name = "Oleg", sal = 2100, depno = 3 });
            employees.Add(new Employee() { empno = "1004", name = "Shay", sal = 2450, depno = 2 });
            employees.Add(new Employee() { empno = "1005", name = "Melissa", sal = 1000, depno = 4 });
            employees.Add(new Employee() { empno = "1006", name = "Gabi", sal = 5000, depno = 4 });

            List<Employee> filteredEmployees = new List<Employee>();
            if (!string.IsNullOrEmpty(empno))
            {
                filteredEmployees = employees.Where(emp => emp.empno.Equals(empno)).ToList();
                return Ok(filteredEmployees.FirstOrDefault());
            }
            else
            {
                return Ok(employees);
            }

            
        }
    }

    public class Employee
    {
        public string empno { get; set; }

        public string name { get; set; }

        public int sal { get; set; }

        public int depno { get; set; }

    }
}
