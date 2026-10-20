function setRank() {
  const tag = document.getElementById("rank")
  if (!tag) return
  const jsonString = '{"rank_level": "media1"}'
  const rank = JSON.parse(jsonString)

  let image_path = "/bmc_rank_tags/"
  switch (rank.rank_level) {
    case "founder":
      image_path += "halloweenfounder2026.png"
      break
    case "media1":
      image_path += "media1.png"
      break
    case "media2":
      image_path += "media2.png"
      break
    case "media3":
      image_path += "media3.png"
      break
    case "influencer":
      image_path += "influencer.png"
      break
    case "jr_builder":
      image_path += "jr_builder.png"
      break
    case "builder":
      image_path += "builder.png"
      break
    case "adept_builder":
      image_path += "adept_builder.png"
      break
    case "sr_builder":
      image_path += "sr_builder.png"
      break
    case "pro_builder":
      image_path += "build_supervisor.png"
      break
    case "event":
      image_path += "event.png"
      break
    case "qa":
      image_path += "qa.png"
      break
    case "designer":
      image_path += "designer.png"
      break
    case "trainee":
      image_path += "trainee.png"
      break
    case "jr_mod":
      image_path += "jr_mod.png"
      break
    case "mod":
      image_path += "mod.png"
      break
    case "sr_mod":
      image_path += "sr_mod.png"
      break
    case "mentor":
      image_path += "mentor.png"
      break
    case "supervisor":
      image_path += "supervisor.png"
      break
    case "admin":
      image_path += "admin.png"
      break
    case "jr_dev":
      image_path += "jr_dev.png"
      break
    case "dev":
      image_path += "dev.png"
      break
    case "sr_dev":
      image_path += "sr_dev.png"
      break
    case "head_dev":
      image_path += "head_dev.png"
      break
    case "dev_admin":
      image_path += "dev_admin.png"
      break
    case "project_lead":
      image_path += "project_lead.png"
      break
    case "manager":
      image_path += "manager.png"
      break
  }
  tag.src = image_path
  tag.alt = image_path.replaceAll("bmc_rank_tags/", "").replaceAll(".png", "")
}

document.addEventListener("DOMContentLoaded", () => {
  setRank()
})
