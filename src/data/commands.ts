// edit this object to add/remove commands
const commands = [
  // ~ Admin
  {
    "name": "reset",
    "type": "Admin",
    "description": "Reset scores or MMR of an individual or the entire server. Remove everyone from a queue.",
    "usage": [
      "/reset leaderboard",
      "/reset user [member]",
      "/reset queue [gameid]",
      "/reset mmr [member](optional)"
      ],
    "examples": [
      "/reset leaderboard",
      "/reset user @John",
      "/reset queue 03134ff5",
      "/reset mmr @John"
    ]
  },
  {
    "name": "void",
    "type": "Admin",
    "description": "Purge all records of a game. Used if players get \"stuck\" in a match and cannot queue.",
    "usage": [
      "/void [gameid]"
    ],
    "examples": [
      "/void 03134ff5"
    ]
  },
  {
    "name": "change_winner",
    "type": "Admin",
    "description": "Change the results of a finished game.",
    "usage": [
      "/change_winner [gameid] [team]"
    ],
    "examples": [
      "/change_winner 03134ff5 Red"
    ]
  },
  {
    "name": "winner",
    "type": "Admin",
    "description": "Set a winner for an ongoing game without requiring a vote.",
    "usage": [
      "/winner [role]"
    ],
    "examples": [
      "/winner @Red: 316d8cc7"
    ]
  },
  {
    "name": "queue_preference",
    "type": "Admin",
    "description": "Decide if players can be in multiple queues at once.",
    "usage": [
      "/queue_preference [options] "
    ],
    "examples": [
      "/queue_preference Single Queue"
    ]
  },
  {
    "name": "sbmm",
    "type": "Admin",
    "description": "Toggle Skill",
    "usage": [
      "/sbmm [options]"
    ],
    "examples": [
      "/sbmm Disable"
    ]
  },
  {
    "name": "cancel",
    "type": "Admin",
    "description": "Cancel an ongoing match",
    "usage": [
      "/cancel [gameid]"
    ],
    "examples": [
      "/cancel 03134ff5"
    ]
  },
  {
    "name": "grant",
    "type": "Admin",
    "description": "Give a Discord role the permissions to run a specific admin command",
    "usage": [
      "/grant_queue_commands [role] [command]",
      "/grant_server_commands [role] [command]",
      "/grant_game_commands [role] [command]",
      "/grant_leaderboard_commands [role] [command]"
    ],
    "examples": [
      "/grant_queue_commands @Moderators Reset a queue"
    ]
  },
  {
    "name": "revoke",
    "type": "Admin",
    "description": "Remove the admin command from a discord role you previously set",
    "usage": [
      "/revoke_queue_commands [role] [command]",
      "/revoke_server_commands [role] [command]",
      "/revoke_game_commands [role] [command]",
      "/revoke_leaderboard [role] [command]"
    ],
    "examples": [
      "/revoke_queue_commands @Moderators Reset a queue"
    ]
  },
  {
    "name": "user_dequeue",
    "type": "Admin",
    "description": "Remove single user from an ongoing queue",
    "usage": [
      "/user_dequeue [member]"
    ],
    "examples": [
      "/user_dequeue @John"
    ]
  },
  {
    "name": "duo_queue",
    "type": "Admin",
    "description": "Toggle Duo queuing",
    "usage": [
      "/duo_queue [options]"
    ],
    "examples": [
      "/duo_queue Enable"
    ]
  },
  {
    "name": "setregion",
    "type": "Admin",
    "description": "Update the region of an existing channel. (LoL only)",
    "usage": [
      "/setregion [#channelname] [region]"
    ],
    "examples": [
      "/setregion #InHouseQueue EUW"
    ]
  },
  {
    "name": "purge_user",
    "type": "Admin",
    "description": "Remove a member who has left the server from the database",
    "usage": [
      "/purge_user [userid]"
    ],
    "examples": [
      "/purge_user 12345678912312"
        ]
  },
  {
    "name": "purge_inactive",
    "type": "Admin",
    "description": "Purge anyone from the leaderboard with 0 wins, 0 losses, and 0 MVP points.",
    "usage": [
      "/purge_inactive"
    ],
    "examples": [
      "/purge_inactive"
        ]
  },
  {
    "name": "update_ign",
    "type": "Admin",
    "description": "Update the IGN of any player",
    "usage": [
      "/update_ign [ign] [member] [game]"
    ],
    "examples": [
      "/update_ign Faker John League of Legends"
    ]
  },
  {
    "name": "require",
    "type": "Admin",
    "description": "Set queue requirements based on the specified options",
    "usage": [
      "/require [condition] [game] [feature]"
    ],
    "examples": [
      "/require True League of Legends IGN",
      "/require True League of Legends Character Required"
    ]
  },
  {
    "name": "update_character",
    "type": "Admin",
    "description": "Add/update the champion, hero or agent a member has played",
    "usage": [
      "/update_character [name] [gameid] [member] [game]"
    ],
    "examples": [
      "/update_character Teemo 03134ff5 @iHenners League of Legends"
    ]
  },
  {
    "name": "queue_role",
    "type": "Admin",
    "description": "Users must have this role before being able to queue",
    "usage": [
      "/queue_role [role] [game]"
    ],
    "examples": [
      "/queue_role @InHouseQueue League of Legends"
    ]
  },
  {
    "name": "fill",
    "type": "Admin",
    "description": "Enable Fill. Players queueing fill will be assigned a random available role",
    "usage": [
      "/fill [condition]"
    ],
    "examples": [
      "/fill True"
    ]
  },
  {
    "name": "casual",
    "type": "Admin",
    "description": "Enable Casual mode. No predefined roles, just 1 queue button for quick casual InHouse games",
    "usage": [
      "/casual [condition]"
    ],
    "examples": [
      "/casual True"
    ]
  },
  {
    "name": "force_start",
    "type": "Admin",
    "description": "Forces the game to start once the ready-up phase has begun",
    "usage": [
      "/force_start [gameid]",
    ],
    "examples": [
      "/force_start 03134ff5",
    ]
  },
  {
    "name": "schedule",
    "type": "Admin",
    "description": "Schedule when the queue opens and closes automatically (Timezones: UTC, EST, EDT)",
    "usage": [
      "/schedule",
    ],
    "examples": [
      "/schedule",
    ]
  },
  {
    "name": "delete_schedule",
    "type": "Admin",
    "description": "Delete a previously set schedule",
    "usage": [
      "/delete_schedule",
    ],
    "examples": [
      "/delete_schedule",
    ]
  },
  {
    "name": "feature",
    "type": "Admin",
    "description": "Toggle certain features",
    "usage": [
      "/feature [condition] [feature]",
    ],
    "examples": [
      "/feature True MVP Voting",
    ]
  },
  {
   "name": "captain_queue",
   "type": "Admin",
   "description": "Toggle Captain mode",
    "usage": [
      "/captain_queue [condition]",
    ],
    "examples": [
      "/captain_queue True",
    ]
  },
   {
    "name": "add_mmr",
    "type": "Admin",
    "description": "Increase a members MMR by an approximate percentage %",
     "usage": [
       "/add_mmr [member] [percentage]",
     ],
     "examples": [
       "/add_mmr @Faker 100",
     ]
  },
   {
    "name": "remove_mmr",
    "type": "Admin",
    "description": "Decrease a members MMR by an approximate percentage %",
     "usage": [
       "/remove_mmr [member] [percentage]",
     ],
     "examples": [
       "/remove_mmr @Faker 100",
     ]
   },
   {
     "name": "server_stats",
     "type": "Admin",
     "description": "Bring up your server statistics for the InHouseQueue bot!",
     "usage": [
       "/server_stats",
     ],
     "examples": [
       "/server_stats",
     ]
   },
  {
    "name": "check_permissions",
    "type": "Admin",
    "description": "Check and display enabled InHouseQueue permissions in a specific channel",
    "usage": [
      "/check_permissions [#channelname] (optional)",
    ],
    "examples": [
      "/check_permissions #general",
    ]
  },
  {
     "name": "add_lobby_info",
     "type": "Admin",
     "description": "Set/Update Lobby Instructions or details for players.",
     "usage": [
      "/add_lobby_info [title] [description]",
     ],
     "examples": [
       "/add_lobby_info Rules No toxicity in voice calls",
     ]
  },
  {
     "name": "set_timer",
     "type": "Admin",
     "description": "Update the Read up timer limit (Minutes)",
     "usage": [
      "/set_timer [minutes]",
     ],
     "examples": [
       "/set_timer 2",
     ]
  },
   {
     "name": "restrict_role",
     "type": "Admin",
     "description": "Assign a discord role for specific queue position",
     "usage": [
      "/restrict_role [discord_role] [queue_role]",
     ],
     "examples": [
       "/restrict_role @Healer healer",
     ]
  },
   {
     "name": "unrestrict_role",
     "type": "Admin",
     "description": "Removes the Discord role restriction from a designated queue position.",
     "usage": [
      "/unrestrict_role",
     ],
     "examples": [
       "/unrestrict_role [role]",
     ]
   },
    {
      "name": "language",
      "type": "Admin",
      "description": "Change the language of InHouseQueue",
      "usage": [
       "/language",
      ],
      "examples": [
          "/language Spanish",
      ]
    },
    {
      "name": "start_challenges",
      "type": "Admin",
      "description": "Initiate challenges in your server. Let the fun begin!",
      "usage": [
       "/start_challenges [game]",
      ],
      "examples": [
          "/start_challenges Custom",
      ]
    },
    {
      "name": "reset_challenges",
      "type": "Admin",
      "description": "Reset everyone's challenge progress.",
      "usage": [
       "/reset_challenges",
      ],
      "examples": [
          "/reset_challenges",
      ]
    },
    {
      "name": "pause_challenges",
      "type": "Admin",
      "description": "Pause the progression of challenges in your server",
      "usage": [
       "/pause_challenges",
      ],
      "examples": [
          "/pause_challenges",
      ]
    },
    {
      "name": "top_ten_preference",
      "type": "Admin",
      "description": "Determine how the Top10 leaderboard is Ranked",
      "usage": [
       "/top_ten_preference [pref]",
      ],
      "examples": [
          "/top_ten_preference MMR",
      ]
    },
     {
      "name": "captain_pick_order",
      "type": "Admin",
      "description": "Full customize your captain pick order",
      "usage": [
       "/top_ten_preference",
      ],
      "examples": [
          "/top_ten_preference",
      ]
    },

  // ~ Set-up
  {
    "name": "setup",
    "type": "Set-Up",
    "description": "Setup your server Automatically!",
    "usage": [
      "/setup [game]"
    ],
    "examples": [
      "/setup Overwatch"
    ]
  },
  {
    "name": "setchannel",
    "type": "Set-Up",
    "description": "Set queue channel. You may set as many queue channels as you require.",
    "usage": [
      "/setchannel [#channelname] [game]"
    ],
    "examples": [
      "/setchannel #InHouseQueue Valorant"
    ]
  },
  {
    "name": "setwinnerlog",
    "type": "Set-Up",
    "description": "Game results are sent to this channel. You may only have 1 match history channel per server.",
    "usage": [
      "/setwinnerlog [#channelname] [game]"
    ],
    "examples": [
      "/setwinnerlog #match-history Valorant"
    ]
  },
  {
    "name": "top_ten",
    "type": "Set-Up",
    "description": "Set up a Dynamic top ten leaderboard",
    "usage": [
      "/top_ten [#channelname] [game]"
    ],
    "examples": [
      "/top_ten #leaderboard Overwatch"
    ]
  },
  {
    "name": "test_mode",
    "type": "Set-Up",
    "description": "Toggle Test mode",
    "usage": [
      "/test_mode [options]"
    ],
    "examples": [
      "/test_mode True"
    ]
  },

  // ~ General
  {
    "name": "help",
    "type": "General",
    "description": "Display help menu.",
    "usage": [
      "/help"
    ],
    "examples": []
  },
  {
    "name": "start",
    "type": "General",
    "description": "Start an InHouse queue. This command can only be run in a queue channel.",
    "usage": [
      "/start"
    ],
    "examples": []
  },
  {
    "name": "win",
    "type": "General",
    "description": "Initiate the winner vote. This command can only be run in a lobby channel.",
    "usage": [
      "/win"
    ],
    "examples": []
  },
  {
    "name": "leaderboard",
    "type": "General",
    "description": "Display a specific leaderboard.",
    "usage": [
      "/leaderboard_[game] [options]"
    ],
    "examples": [
      "/leaderboard_lol mmr",
      "/leaderboard_lol mvp",
      "/leaderboard_lol"
    ]
  },
  {
    "name": "rank",
    "type": "General",
    "description": "Display a player's rank in the server.",
    "usage": [
      "/rank_[game] [user]"
    ],
    "examples": [
      "/rank_lol Faker"
    ]
  },
  {
    "name": "ign",
    "type": "General",
    "description": "Set your In Game Name",
    "usage": [
      "/ign [ign] [game]"
    ],
    "examples": [
      "/ign Faker League of Legends"
    ]
  },
  {
    "name": "champion",
    "type": "General",
    "description": "Select your champion. Only works inside a lobby channel",
    "usage": [
      "/champion [name]",
    ],
    "examples": [
      "/champion Teemo",
    ]
  },
  {
    "name": "hero",
    "type": "General",
    "description": "Select your hero. Only works inside a lobby channel",
    "usage": [
      "/hero [name]",
    ],
    "examples": [
      "/hero Tracer",
    ]
  },
  {
    "name": "agent",
    "type": "General",
    "description": "Select your agent. Only works inside a lobby channel",
    "usage": [
      "/agent [name]",
    ],
    "examples": [
      "/agent Astra",
    ]
  },
  {
    "name": "top",
    "type": "General",
    "description": "View players with the highest win rates on a particular character",
    "usage": [
      "/top [game] [name]",
    ],
    "examples": [
      "/top League of Legends Thresh",
    ]
  },
  {
    "name": "abandon",
    "type": "General",
    "description": "Initiate a vote to cancel an ongoing game",
    "usage": [
      "/abandon",
    ],
    "examples": [
      "/abandon",
    ]
  },
  {
    "name": "challenges",
    "type": "General",
    "description": "View all challenges available for InHouseQueue. Free and Premium.",
    "usage": [
      "/challenges",
    ],
    "examples": [
      "/challenges",
    ]
  },
  {
    "name": "my_challenges",
    "type": "General",
    "description": "View your challenge progress",
    "usage": [
      "/my_challenges",
    ],
    "examples": [
      "/my_challenges",
    ]
  },
  {
    "name": "refresh_challenges",
    "type": "General",
    "description": "Refresh your challenges incase they did not update",
    "usage": [
      "/refresh_challenges",
    ],
    "examples": [
      "/refresh_challenges",
    ]
  },
  // ~ Games
//   {
//     "name": "champion",
//     "type": "LoL",
//     "description": "Select your champion. Only works inside a lobby channel",
//     "usage": [
//       "/champion [name]",
//     ],
//     "examples": [
//       "/champion Teemo",
//     ]
//   },
//   {
//     "name": "hero",
//     "type": "Overwatch",
//     "description": "Select your hero. Only works inside a lobby channel",
//     "usage": [
//       "/hero [name]",
//     ],
//     "examples": [
//       "/hero Tracer",
//     ]
//   },
//   {
//     "name": "agent",
//     "type": "Valorant",
//     "description": "Select your agent. Only works inside a lobby channel",
//     "usage": [
//       "/agent [name]",
//     ],
//     "examples": [
//       "/agent Astra",
//     ]
//   }
// removing these for now - leaving as an example in case i ever add game specific commands
// full search for "League of Legends commands" in this repo
] as const;

// export commands
export default commands;

// types
export type Command = typeof commands[number];
