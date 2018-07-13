<?php

namespace App\Helpers;

use Carbon\Carbon;
use App\Models\Schedule;

class Scheduler
{
    /*
    * Build Timestamp
    */
    public static function buildDateTime(Array $time)
    {
      return Carbon::create($time['year'], $time['month'], $time['day'], $time['hour'], $time['minute'], rand(0,59), 'America/Los_Angeles');
    }

    /*
    * Get English Day of Week
    */
    public static function getEnglishDayOfWeek($dayOfWeek)
    { 
      $englishDays = [
        0 => "Sunday",
        1 => "Monday",
        2 => "Tuesday",
        3 => "Wednesday",
        4 => "Thursday",
        5 => "Friday",
        6 => "Saturday",
      ];
      return $englishDays[$dayOfWeek];
    }

    /*
    * Get Next Date Time
    */
    public static function getNextDateTime()
    {
      $latestScheduled = Schedule::orderBy('datetime', 'desc')->first();
      $nextDateTime = $latestScheduled->datetime->addMinutes(rand(1,12));
      if($nextDateTime->hour >= 19) {
        $nextDateTime->addDay(1);
        $nextDateTime->hour = 10;
        $nextDateTime->minute = 00;
      }
      return $nextDateTime;
    }
}
