using Microsoft.AspNetCore.Mvc;
using MyFirstASPNETWebApp.Models; // include this line because it links us to the models folder
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPNETWebApp.Controllers
{
    public class BlahController : Controller // : means inheritance
    {
        public IActionResult Index()
        {
            // throw new IndexOutOfRangeException();
            return View();
        }

        [HttpGet]
        public IActionResult Grades ()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Grades(GradesModel model)
        {
            return View();
        }
    }
}
