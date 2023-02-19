package com.ajax.crud.Controller;

import com.ajax.crud.dto.User;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class UserController {

    int id = 0;
    List<User> userList = new ArrayList<>();

    @GetMapping("/")
    public String showIndexPage() {

        return "index";
    }

    @PostMapping("/saveUser")
    public @ResponseBody String saveUser(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("address") String address) throws JSONException {

        System.out.println("saveUser : Started");

        //increment the ID
        this.id = id + 1;

        //add the user
        User user = User.builder()
                .id(id)
                .name(name)
                .email(email)
                .address(address)
                .build();

        userList.add(user);

        JSONObject responseObject = new JSONObject();
        responseObject.put("id", user.getId());
        responseObject.put("name", user.getName());
        responseObject.put("email", user.getEmail());
        responseObject.put("address", user.getAddress());

        System.out.println("saveUser : Completed");

        return responseObject.toString();
    }

    @GetMapping("/users")
    public @ResponseBody List<User> getUsers() {

        System.out.println("getUsers : Completed");

        return userList;
    }

    @GetMapping("/deleteUser")
    public @ResponseBody String deleteUser(@RequestParam("userId") int userId) throws JSONException {

        System.out.println("deleteUser : Started");

        //delete the user
        userList.stream()
                .filter(user -> user.getId() == userId)
                .findFirst()
                .ifPresent(userList::remove);

        JSONObject responseObject = new JSONObject();
        responseObject.put("message", "User removed!!");

        System.out.println("deleteUser : Started");

        return responseObject.toString();
    }


    @PostMapping("/updateUser")
    public @ResponseBody String updateUser(@RequestParam("userId") int userId,
                                           @RequestParam("name") String name,
                                           @RequestParam("email") String email,
                                           @RequestParam("address") String address) throws JSONException {

        System.out.println("updateUser : Started");

        //update the user
        userList.forEach(
                user -> {
                    if (user.getId() == userId) {
                        user.setName(name);
                        user.setEmail(email);
                        user.setAddress(address);
                    }
                }
        );

        JSONObject resObj = new JSONObject();
        resObj.put("id", userId);
        resObj.put("name", name);
        resObj.put("email", email);
        resObj.put("address", address);

        System.out.println("updateUser : Started");

        return resObj.toString();
    }
}
