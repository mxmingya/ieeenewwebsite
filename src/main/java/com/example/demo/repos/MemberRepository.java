package com.example.demo.repos;

/**
 * Created by mingyama on 4/5/18.
*/

/**
 * Created by mingyama on 4/4/18.
 */
import com.example.demo.model.Member;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

@Transactional
public interface MemberRepository extends CrudRepository<Member, Long> {

        List<Member> findByLastName(String lastName);
}
